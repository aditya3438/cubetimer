

### Cube timer is a React web app containing the following urls.
1. /Login
2. /Home
3. /Profile/:userId.

#### Conditions:
1. Only after login the routes no.3 will be accessible.
2. The user should have a sign-out button after login in the header under his username.
3. Unauthenticated users can only access the route no. 1 & 2.
4. If the user reloads the browser on any route, the state of the route should be preserved.
    
#### Route 1(/Login)
1. Login form will contain the userId and Password field satisfying below conditions.
    a.  The userId should be converted to uppercase even if the user inputs in small case.
    b.  The user id can contain only letters and numbers.
    c.  The password cannot contain space and must be between 6-12 characters and must include atleast a special character from `[!@#$*]`
2. Once user successfully logs in, the userId should be visible in header with the navigation to route 3 and signout button and should by default land on route 3.
3. The login should be tested with multiple users via the mock service.
4. Form Validation should be done with proper messages and login button should be disabled if form is invalid.

#### Route 2(/Home)
1. The home page will have navigation Links to other routes. 
2. If an Unauthenticated user tries to navigate to route 3, he should be redirected to Route 1.

#### Route 3 (/Profile/:userId)
1. Route 3 page will contain the user profile having the below readonly fields:
   Name,emailId, address, Contact, Gender.
2. The user profile will be fetched using a mock service.
3. Even if user tries to modify the userId in URL. The logged in user profile should only be fetched and the url should change to valid UserId URL.

