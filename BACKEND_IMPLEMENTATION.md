# Backend Implementation Guide

## Feature 1: Job Request Workflow (Client → Recruiter)

### Database Table: `job_requests`

```sql
CREATE TABLE job_requests (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    client_id BIGINT NOT NULL,
    client_name VARCHAR(255) NOT NULL,
    tenant_id BIGINT NOT NULL,
    title VARCHAR(255) NOT NULL,
    department VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    employment_type ENUM('FULL_TIME', 'PART_TIME', 'CONTRACT', 'TEMPORARY') NOT NULL,
    priority ENUM('LOW', 'MEDIUM', 'HIGH', 'URGENT') NOT NULL,
    number_of_openings INT NOT NULL DEFAULT 1,
    salary_range VARCHAR(100),
    description TEXT NOT NULL,
    requirements TEXT NOT NULL,
    status ENUM('PENDING', 'IN_PROGRESS', 'COMPLETED', 'REJECTED') DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by BIGINT,
    
    FOREIGN KEY (client_id) REFERENCES users(id),
    FOREIGN KEY (tenant_id) REFERENCES tenants(id),
    INDEX idx_client_id (client_id),
    INDEX idx_tenant_id (tenant_id),
    INDEX idx_status (status)
);
```

### Backend Entity: `JobRequest.java`

```java
@Entity
@Table(name = "job_requests")
public class JobRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "client_id", nullable = false)
    private Long clientId;
    
    @Column(name = "client_name", nullable = false)
    private String clientName;
    
    @Column(name = "tenant_id", nullable = false)
    private Long tenantId;
    
    @Column(nullable = false)
    private String title;
    
    @Column(nullable = false)
    private String department;
    
    @Column(nullable = false)
    private String location;
    
    @Enumerated(EnumType.STRING)
    @Column(name = "employment_type", nullable = false)
    private EmploymentType employmentType;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Priority priority;
    
    @Column(name = "number_of_openings", nullable = false)
    private Integer numberOfOpenings = 1;
    
    @Column(name = "salary_range")
    private String salaryRange;
    
    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;
    
    @Column(columnDefinition = "TEXT", nullable = false)
    private String requirements;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private JobRequestStatus status = JobRequestStatus.PENDING;
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @Column(name = "created_by")
    private Long createdBy;
    
    // Getters and setters
}

enum EmploymentType {
    FULL_TIME, PART_TIME, CONTRACT, TEMPORARY
}

enum Priority {
    LOW, MEDIUM, HIGH, URGENT
}

enum JobRequestStatus {
    PENDING, IN_PROGRESS, COMPLETED, REJECTED
}
```

### Backend Repository: `JobRequestRepository.java`

```java
@Repository
public interface JobRequestRepository extends JpaRepository<JobRequest, Long> {
    List<JobRequest> findByClientIdAndTenantId(Long clientId, Long tenantId);
    List<JobRequest> findByTenantIdAndStatus(Long tenantId, JobRequestStatus status);
    List<JobRequest> findByTenantIdOrderByCreatedAtDesc(Long tenantId);
}
```

### Backend Service: `JobRequestService.java`

```java
@Service
public class JobRequestService {
    
    @Autowired
    private JobRequestRepository jobRequestRepository;
    
    // Client creates job request
    public JobRequest createJobRequest(JobRequest request, Long clientId, Long tenantId) {
        request.setClientId(clientId);
        request.setTenantId(tenantId);
        request.setStatus(JobRequestStatus.PENDING);
        request.setCreatedAt(LocalDateTime.now());
        request.setCreatedBy(clientId);
        return jobRequestRepository.save(request);
    }
    
    // Client gets their job requests
    public List<JobRequest> getClientJobRequests(Long clientId, Long tenantId) {
        return jobRequestRepository.findByClientIdAndTenantId(clientId, tenantId);
    }
    
    // Recruiter gets all job requests for their tenant
    public List<JobRequest> getJobRequestsForTenant(Long tenantId) {
        return jobRequestRepository.findByTenantIdOrderByCreatedAtDesc(tenantId);
    }
    
    // Recruiter updates job request status
    public JobRequest updateStatus(Long id, JobRequestStatus status, Long tenantId) {
        JobRequest request = jobRequestRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Job request not found"));
        
        if (!request.getTenantId().equals(tenantId)) {
            throw new UnauthorizedException("Access denied");
        }
        
        request.setStatus(status);
        request.setUpdatedAt(LocalDateTime.now());
        return jobRequestRepository.save(request);
    }
}
```

### Backend Controller: `JobRequestController.java`

```java
@RestController
@RequestMapping("/api/job-requests")
public class JobRequestController {
    
    @Autowired
    private JobRequestService jobRequestService;
    
    // Client creates job request
    @PostMapping
    public ResponseEntity<JobRequest> createJobRequest(
            @RequestBody JobRequest request,
            @RequestHeader("X-Tenant-ID") Long tenantId,
            @RequestHeader("X-User-ID") Long userId) {
        JobRequest created = jobRequestService.createJobRequest(request, userId, tenantId);
        return ResponseEntity.ok(created);
    }
    
    // Client gets their job requests
    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<JobRequest>> getClientJobRequests(
            @PathVariable Long clientId,
            @RequestHeader("X-Tenant-ID") Long tenantId) {
        List<JobRequest> requests = jobRequestService.getClientJobRequests(clientId, tenantId);
        return ResponseEntity.ok(requests);
    }
    
    // Recruiter gets all job requests
    @GetMapping("/recruiter")
    public ResponseEntity<List<JobRequest>> getJobRequestsForRecruiter(
            @RequestHeader("X-Tenant-ID") Long tenantId) {
        List<JobRequest> requests = jobRequestService.getJobRequestsForTenant(tenantId);
        return ResponseEntity.ok(requests);
    }
    
    // Recruiter updates status
    @PatchMapping("/{id}/status")
    public ResponseEntity<JobRequest> updateStatus(
            @PathVariable Long id,
            @RequestBody Map<String, String> body,
            @RequestHeader("X-Tenant-ID") Long tenantId) {
        JobRequestStatus status = JobRequestStatus.valueOf(body.get("status"));
        JobRequest updated = jobRequestService.updateStatus(id, status, tenantId);
        return ResponseEntity.ok(updated);
    }
}
```

### API Endpoints

1. **POST** `/api/job-requests` - Client creates job request
2. **GET** `/api/job-requests/client/{clientId}` - Client views their requests
3. **GET** `/api/job-requests/recruiter` - Recruiter views all requests
4. **PATCH** `/api/job-requests/{id}/status` - Recruiter updates status

---

## Testing Steps

### 1. Client Side Testing
- Login as CLIENT user
- Navigate to Job Requests section
- Click "Request New Position"
- Fill form and submit
- Verify request appears in list with PENDING status

### 2. Recruiter Side Testing
- Login as RECRUITER user
- Navigate to Clients → Select Client → Job Requests tab
- Verify client's request appears
- Click "Approve" or "Reject"
- Verify status updates

### 3. Integration Testing
- Create request as client
- Verify it appears in recruiter dashboard
- Update status as recruiter
- Verify status updates in client view
