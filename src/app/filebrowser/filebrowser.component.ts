import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { AngularFire } from 'angularfire2';
import { FileUploadComponent } from '../file-upload/file-upload.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { user } from '../shared/user';

@Component({
  moduleId: module.id,
  selector: 'slothbox-filebrowser',
  templateUrl: 'filebrowser.component.html',
  styleUrls: ['filebrowser.component.css'],
  directives: [FileUploadComponent, SidebarComponent]
})
export class FilebrowserComponent implements OnInit {

  constructor(private router: Router, public af: AngularFire) {
    if (af.auth.getAuth() == null) {
      user.googleToken = "";
      user.dropboxToken = "";
      user.googleAvatar = "https://placehold.it/32/32";
      router.navigate(['Login']);
    }
  }

  ngOnInit() {
  }

}
