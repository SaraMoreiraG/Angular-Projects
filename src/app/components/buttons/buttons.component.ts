import { Component } from '@angular/core';

@Component({
  selector: 'buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  // --------------  Switch
  offText = true
  offTextClass = 'col-md-12 text-start ps-3 m-0'
  showStatus(){
    this.offText = !this.offText
    if(this.offText)
      this.offTextClass = 'col-md-12 text-start ps-3 m-0'
    else
      this.offTextClass = 'col-md-12 text-end pe-4 m-0'
  }
  // --------------  Favourite
  isFav = false;
  setFav(){
    this.isFav = !this.isFav
  }
  // --------------  Notification
  isNotif = false;
  notifications = 0;
  setNotification(){
    this.isNotif = true
    this.notifications++
  }
 // --------------  Load data
  myData = '';
  statusBtn = false;
  showData() {
    if(this.statusBtn === true) {

      this.myData = 'Nothing else to say';
      this.statusBtn = false;
    }
    else {
      this.myData = 'Have a nice day!';
      this.statusBtn = true;
    }
  }
  // --------------  Show list
  myList = ['Apple', 'Toilet paper', 'Cheese', 'Book', 'Onion']
  visible = false
  text = "Show list"
  showList() {
    if (this.visible === false){
      this.text = "Hide list"
    }
    else
      this.text = "Show list"
    this.visible = !this.visible
  }
  // --------------  Write text
  userText = ''
  chars = 250
  charsLeft = 250
  decreaseCharsLeft(){
    this.charsLeft= this.chars - this.userText.length
  }
}
