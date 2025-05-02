# Role-Based Access Control (RBAC)

This is a Node.js backend project that implements **Role-Based Access Control** (RBAC) to manage user permissions based on roles. It provides secure and scalable authentication and authorization for web applications.

## Roles in the Project

There are three user roles defined:

1. **Admin**
2. **Manager**
3. **User**

### Access Permissions

- **Admin** has access to all resources (Admin, Manager, and User).
- **Manager** has access to Manager and User resources.
- **User** has access only to User-level resources.

---

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB URI (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- `.env` file with the following variables:

```env
PORT=7001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
