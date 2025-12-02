# TalentForge Backend + Database Deployment

**Cost: $0-2/month** (AWS Free Tier)

## Architecture
```
EC2 t2.micro → RDS t3.micro PostgreSQL
```

## Quick Deploy

### 1. Create RDS Database
```bash
aws rds create-db-instance \
    --db-instance-identifier talentforge-db \
    --db-instance-class db.t3.micro \
    --engine postgres \
    --engine-version 15.4 \
    --master-username talentforge \
    --master-user-password "SecurePass123!" \
    --allocated-storage 20 \
    --storage-type gp2 \
    --publicly-accessible \
    --backup-retention-period 7
```

### 2. Create EC2 Instance
```bash
aws ec2 run-instances \
    --image-id ami-0c02fb55956c7d316 \
    --count 1 \
    --instance-type t2.micro \
    --key-name your-key-pair \
    --security-group-ids sg-backend \
    --user-data file://backend-setup.sh
```

### 3. Backend Setup Script (`backend-setup.sh`)
```bash
#!/bin/bash
yum update -y
yum install -y docker git java-17-amazon-corretto

systemctl start docker
systemctl enable docker

# Clone backend
git clone https://github.com/your-org/TalentForge-Backend.git
cd TalentForge-Backend

# Environment config
cat > .env << EOF
DATABASE_URL=jdbc:postgresql://your-rds-endpoint:5432/talentforge
DATABASE_USERNAME=talentforge
DATABASE_PASSWORD=SecurePass123!
JWT_SECRET=your-jwt-secret-here
CORS_ALLOWED_ORIGINS=*
EOF

# Build and run
./mvnw clean package -DskipTests
java -jar target/talentforge-backend.jar
```

### 4. Security Groups
```bash
# Backend security group
aws ec2 create-security-group --group-name sg-backend --description "Backend API"
aws ec2 authorize-security-group-ingress --group-name sg-backend --protocol tcp --port 8080 --cidr 0.0.0.0/0
aws ec2 authorize-security-group-ingress --group-name sg-backend --protocol tcp --port 22 --cidr your-ip/32

# Database security group  
aws ec2 create-security-group --group-name sg-database --description "PostgreSQL DB"
aws ec2 authorize-security-group-ingress --group-name sg-database --protocol tcp --port 5432 --source-group sg-backend
```

## Access
- **API Endpoint**: `http://your-ec2-ip:8080/api`
- **Database**: `your-rds-endpoint:5432`

## Monitoring
```bash
# CPU alarm
aws cloudwatch put-metric-alarm \
    --alarm-name "Backend-HighCPU" \
    --metric-name CPUUtilization \
    --namespace AWS/EC2 \
    --statistic Average \
    --period 300 \
    --threshold 80 \
    --comparison-operator GreaterThanThreshold \
    --evaluation-periods 2
```