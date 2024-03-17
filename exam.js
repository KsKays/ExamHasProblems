/* ----- Person ----- */
class Person {
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = "";
  constructor(name, address, email, phone, accountType) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }

  toString() {
    return `Person [name = ${this.name}, address = ${this.address}, email = ${this.email}, phone = ${this.phone}, AccountType = ${this.AccountType}]`;
  }
}

/* ----- Account ----- */
class Account {
  username = "";
  password = "";
  status = "";
  constructor(username, password, status) {
    this.username = username;
    this.password = password;
    this.status = status;
  }
  login(username, password) {
    this.username = username;
    this.password = password;
  }
  resetPassword(username, newPassword) {
    this.username = username;
    this.newPassword = newPassword;
  }
  toString() {
    return `Account [username = ${this.username}, password = ${this.password}, status = ${this.status}`;
  }
}

/* ----- Receptionist ----- */
class Receptionist {
  name = "";
  date = "";
  totalRoomBooked = 0;
  constructor(name, date, totalRoomBooked, state) {
    this.name = name;
    this.date = date;
    this.totalRoomBooked = totalRoomBooked;
    this.state = state;
  }
  getName() {
    return this.name;
  }
  createBooking() {
    this.createBooking = this.createBooking;
  }
  toString() {
    return `Receptionist [name = ${this.name}, date = ${this.date}], total = ${this.totalRoomBooked}`;
  }
}

/* ----- Guest ----- */
class Guest {
  customer = null;
  date = "";
  totalRoomBooked = "";
  constructor(customer, date, totalRoomBooked) {
    this.customer = customer;
    this.date = date;
    this.totalRoomBooked = totalRoomBooked;
  }
  getCustomer() {
    return this.customer;
  }
  createBooking() {
    this.createBooking = this.createBooking;
  }

  toString() {
    return `Guest [Customer = ${this.customer}, date = ${this.date}, total = ${this.totalRoomBooked}]`;
  }
}

/* ----- RoomBooking ----- */
class RoomBooking extends Person {
  reservationNumber = "";
  startDate = date;
  durationDays = 0;
  status = "";
  createdBy = "";
  constructor(
    name,
    address,
    email,
    phone,
    accountType,
    reservationNumber,
    startDate,
    durationDays,
    status,
    createdBy
  ) {
    super(name, address, email, phone, accountType);
    this.reservationNumber = reservationNumber;
    this.startDate = startDate;
    this.durationDays = durationDays;
    this.status = status;
    this.createdBy = createdBy;
  }
  getDetail(reservationNumber) {
    this.reservationNumber = reservationNumber;
  }
  createBooking(reservationNumber, durationDays, Guest) {
    this.reservationNumber = reservationNumber;
    this.durationDays = durationDays;
    this.Guest = Guest;
  }
  toString() {
    return ` RoomBooking [${super.toString()} , ReservationNumber = ${
      this.reservationNumber
    }, StartDate = ${this.startDate}, DurationDays = ${this.durationDays}]`;
  }
}

/* ----- Room ----- */
class Room {
  roomNumber = "";
  style = "";
  status = "";
  roomPrice = double;
  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }
  isRoomAvailable(roomNumber) {
    return (this.roomNumber = roomNumber);
  }
  createRoom(roomNumber, style, status, price) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.price = price;
  }
  toString() {
    return `Room [RoomNumber = ${this.roomNumber}, Style = ${this.style}, Status = ${this.status}, RoomPrice = ${this.roomPrice}]`;
  }
}

/* ----- Hotel ----- */
class Hotel {
  name = "";
  location = "";
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  getRooms() {
    return this.getRooms;
  }

  addnewRooms(room) {
    this.room = room;
  }
  toString() {
    return `Hotal = [Name = ${this.name}, Location = ${this.location}]`;
  }
}

/* ----- Notification ----- */
class Notification extends Person {
  notificationid = 0;
  createOn = date;
  content = "";
  sender = null;
  recipient = null;
  constructor(
    name,
    address,
    email,
    phone,
    accountType,
    notificationid,
    createOn,
    content,
    sender,
    recipient
  ) {
    super(name, address, email, phone, accountType);
    this.notificationid = notificationid;
    this.createOn = createOn;
    this.content = content;
    this.sender = sender;
    this.recipient = recipient;
  }
  send(sender, recipient, content) {
    this.sender = sender;
    this.recipient = recipient;
    this.content = content;
  }
  toString() {
    return ` RoomBooking [${super.toString()} , Notification = ${
      this.notificationid
    }, CreateOn = ${this.createOn}, Content = ${this.content}, Sender = ${
      this.sender
    }, Recipient = ${this.recipient}]`;
  }
}

/* ----- Enum ----- */

//AccountType
class AccountType {
  static Guests = new AccountType("Guest");
  static Receptionists = new AccountType("Receptionist");
  constructor(accountType) {
    this.accountType = accountType;
  }
}

//AccountStatus
class AccountStatus {
  static Active = new AccountStatus("ACTIVE");
  static BANNED = new AccountStatus("BANNED");
  constructor(name) {
    this.name = name;
  }
}

//RoomStatus
class RoomStatus {
  static AVAILABLE = new RoomStatus("AVAILABLE");
  static DISAVAILABLE = new RoomStatus("DISAVAILABLE");
  static LateCheckout = new RoomStatus("LateCheckout");
  static EarlyCheckeIn = new RoomStatus("EarlyCheckeIn");
  constructor(name) {
    this.name = name;
  }
}

//BookingStatus
class BookingStatus {
  static Confirmed = new BookingStatus("Confirmed");
  static Cancel = new RoomStatus("Cancel");
  constructor(name) {
    this.name = name;
  }
}

/* ----- Main ----- */
const main = () => {
  //***Account
  const account1 = new Account("Alice", "1111", AccountStatus.Active);
  console.log(account1.toString());
  const account2 = new Account("Bob", "2222", AccountStatus.Active);
  console.log(account2.toString());
  const account3 = new Account("Catherine", "3333", AccountStatus.Active);
  console.log(account3.toString());
  const account4 = new Account("David", "444", AccountStatus.Active);
  console.log(account4.toString());
  console.log(
    "----------------------------------------------------------------------"
  );

  //***Person
  const person1 = new Person(
    "Alice",
    "USA",
    "Alice@gmail.com",
    "0123456",
    AccountType.Guests
  );
  console.log(person1.toString());
  const person2 = new Person("Bob", "CH", "Bob@gmail.com", "0123456");
  console.log(person2.toString());
  const person3 = new Person(
    "Catherine",
    "TH",
    "Catherine@gmail.com",
    "0123456"
  );
  console.log(person3.toString());
  const person4 = new Person("David", "JP", "David@gmail.com", "0123456");
  console.log(person4.toString());
  console.log(
    "----------------------------------------------------------------------"
  );

  //***Hotel
  const hotel1 = new Hotel("1 Double bed Sea view", "NPRU");
  console.log(hotel1.toString());
  const hotel2 = new Hotel("1 Twin bed pool view", "NPRU");
  console.log(hotel2.toString());
  const hotel3 = new Hotel("1 Twin bed Sea view", "NPRU");
  console.log(hotel3.toString());
  const hotel4 = new Hotel("1 Double  bed pool view ", "NPRU");
  console.log(hotel4.toString());
  console.log(
    "----------------------------------------------------------------------"
  );

  //***Recepient
  const recep1 = new Receptionist("Catherine", "19/03/2024", 20000);
  const recep2 = new Receptionist("David", "00/00/0000", 0);
  console.log(recep1.toString());
  console.log(recep2.toString());
  console.log(
    "----------------------------------------------------------------------"
  );

  //***Guest
  const guest1 = new Guest("Alice", "00/00/0000", 0);
  const guest2 = new Guest("Bob", "16/03/2024", 30000);
  console.log(guest1.toString());
  console.log(guest2.toString());
  console.log(
    "----------------------------------------------------------------------"
  );
};

main();
