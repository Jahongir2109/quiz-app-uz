import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-profile-home",
  standalone: true,
  imports: [],
  templateUrl: "./profile-home.component.html",
  styleUrl: "./profile-home.component.scss",
})
export class ProfileHomeComponent {
  type: string;
  constructor(private route: ActivatedRoute) {
    this.type = this.route.snapshot.paramMap.get("type");
  }
}
