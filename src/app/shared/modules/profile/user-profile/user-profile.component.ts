import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  // isPatient = false;
  // isDoctor = false;
  // isTenantAdmin = false;
  // imageError = '';
  // imgBase64 = '';
  // isImageSaved = false;
  // isImageSelected = false;
  // @Input() person: Person;
  // @Input() personAddress: Address;
  // userContact: UserContact;
  // constructor(
  //   private userService: UserService,
  //   private confirmationRequestService: ConfirmationRequestService,
  //   private authService: AuthService,
  //   private dialog: MatDialog,
  //   private ntf: NotificationService) { }
  // ngAfterViewInit(): void {

  // }
  // @ViewChild('change_image') fileInput: ElementRef;
  // ngOnInit(): void {
  //   this.getUserContact();
  //   this.isPatient = this.authService.hasRole(Role.Patient);
  //   this.isDoctor = this.authService.hasRole(Role.Doctor);
  //   this.isTenantAdmin = this.authService.hasRole(Role.TenantAdmin);
  // }
  
  // getUserContact() {
  //   this.userService.getUserContact()
  //     .subscribe(th => {
  //       this.userContact = th as UserContact;
  //       if (this.userContact.imageName) {
  //         this.userContact.imageName = `${environment.storageUrl}/api/files/${this.userContact.imageName}/download`
  //       }
  //       else {
  //         this.userContact.imageName = "assets/images/user/usrbig3.jpg";
  //       }
  //     });
  // }
  // sendEmailCode() {
  //   const confR = {} as VerificationRequest;
  //   confR.recipient = this.userContact?.email;
  //   confR.codeType = RequestCodeType.Confirmation;
  //   const dialog = this.dialog.open(VerificationModalComponent, {
  //     data: {
  //       model: confR,
  //       recipientType: 'email'
  //     }
  //   });
  //   dialog.afterClosed().subscribe(a => {
  //     if (a) {
  //       this.getUserContact();
  //     }
  //   })
  // }
  // sendPhoneCode() {
  //   const confR = {} as VerificationRequest;
  //   if (this.userContact?.phoneNumber) {
  //     confR.recipient = this.userContact?.phoneNumber.replace('+', '');
  //   }
  //   confR.codeType = RequestCodeType.Confirmation;
  //   const dialog = this.dialog.open(VerificationModalComponent, {
  //     data: {
  //       model: confR,
  //       recipientType: 'phone'
  //     }
  //   });
  //   dialog.afterClosed().subscribe(a => {
  //     if (a) {
  //       this.getUserContact();
  //     }
  //   })
  // }
  // openFileFolder() {
  //   this.fileInput.nativeElement.click();
  // }
  // onchangeImage(files) {
  //   this.imageError = null;
  //   const file = files[0];
  //   if (file) {

  //     // Size Filter Bytes
  //     const max_size = 20971520;
  //     const allowed_types = ['image/png', 'image/jpeg'];
  //     const max_height = 1200;
  //     const max_width = 1200;
  //     if (files[0].size > max_size) {
  //       this.imageError =
  //         'Максимально допустимые размеры ' + max_size / 1000 + 'Mb';

  //       return false;
  //     }

  //     if (!_.includes(allowed_types, files[0].type)) {
  //       this.imageError = 'Разрешены только изображения ( JPG | PNG )';
  //       return false;
  //     }
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       const image = new Image();
  //       image.src = e.target.result;
  //       image.onload = rs => {
  //         const img_height = rs.currentTarget['height'];
  //         const img_width = rs.currentTarget['width'];

  //         console.log(img_height, img_width);


  //         if (img_height > max_height && img_width > max_width) {
  //           this.imageError =
  //             'Maximum dimentions allowed ' +
  //             max_height +
  //             '*' +
  //             max_width +
  //             'px';
  //           return false;
  //         } else {
  //           const imgBase64Path = e.target.result;
  //           this.imgBase64 = imgBase64Path;
  //           this.isImageSelected = true
  //         }
  //       };
  //     };
  //     reader.readAsDataURL(files[0]);
  //   }
  // }
  // saveImage() {
  //   this.userService.changeImage(this.imgBase64).subscribe({
  //     next: (a) => {
  //       this.ntf.showSuccessUpdate();
  //       this.isImageSaved = true
  //     },
  //     error: (e: Error) => {
  //       this.ntf.showNotification(e.message);
  //     }
  //   })
  // }
}
