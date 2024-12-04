import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDLv2R1uaw7L5MOOqJ0A0y7XEyefquBhFo",
    authDomain: "interviewuz-cf5b4.firebaseapp.com",
    projectId: "interviewuz-cf5b4",
    storageBucket: "interviewuz-cf5b4.firebasestorage.app",
    messagingSenderId: "1025020910019",
    appId: "1:1025020910019:web:5bc2f57d5c157d17f78576",
    measurementId: "G-VFSSKM9Y33"
  };

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor() {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}