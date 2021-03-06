import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'employee_user_profile',
    templateUrl: '../../../templates/users/employee/employee_user_profile.component.html',
    styleUrls: ['../../../stylesheets/users/employee/employee_user_profile.component.css']
})
export class EmployeeUserProfileComponent {
    username: string;
  /*
   constructor is use to call the service and share the data throughout the project.
   */
    constructor(private router: Router) {
        this.username = localStorage.getItem("username");
    }
  /*
   designation method route to the specific page after checking the designation of CEO,Manager,Employee
   */
    designation() {

        if (localStorage.getItem("designation") === 'Manager') {
            this.router.navigate(['/managerDashboard']);
        }
        if (localStorage.getItem("designation") === 'CEO') {
            this.router.navigate(['/superDashboard']);
        }
        if (localStorage.getItem("designation") === 'Employee') {
            this.router.navigate(['/employeeDashboard']);
        }
    }
  /*
   logout method remove the all localstorage variable
   */
  Logout()
  {
    localStorage.removeItem("myToken");
    localStorage.removeItem("aboutuser");
    localStorage.removeItem("designation");
    localStorage.removeItem("branchid");
    localStorage.removeItem("username");
    localStorage.removeItem("accountinfo");
    localStorage.removeItem("companyinfo");
    localStorage.removeItem("companyid");
    localStorage.removeItem("branch");
    localStorage.removeItem("invoiceid");
    localStorage.removeItem("orderid");
    localStorage.removeItem("userinfo");

  }

}
