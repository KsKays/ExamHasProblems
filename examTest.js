/** Class Of Person*/
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
    return `Person: [Name = ${this.name}, Address = ${this.address}, Email = ${this.email}, Phone = ${this.phone}, AccountType = ${this.accountType}]`;
  }
}

/** Class Of Guest*/
class Guest extends Person {
  totalRoomBooked = 0;
  constructor(name, address, email, phone, accountType, totalRoomBooked) {
    super(name, address, email, phone, accountType, totalRoomBooked);
    this.totalRoomBooked = totalRoomBooked;
  }
  //CreateBooking
  createBooking(reservationNumber, startDate, durationDays, guest) {
    const roomBooking = new createBooking(
      reservationNumber,
      startDate,
      durationDays,
      guest
    );
    return roomBooking;
  }
}

/** Class Of Receptionist*/
class Receptionist extends Person {
  constructor(name, address, email, phone, accountType) {
    super(name, address, email, phone, accountType);
  }
  //CreateBooking
  createBooking(reservationNumber, startDate, durationDays, receptionist) {
    const roomBooking = new createBooking(
      reservationNumber,
      startDate,
      durationDays,
      receptionist
    );
    return roomBooking;
  }
}

/** Class Of RoomBooking*/
class RoomBooking {
  reservationNumber = "";
  startDate = "";
  durationDays = 0;
  status = null;
  createdBy = null;
  room = null;
  constructor(
    reservationNumber,
    startDate,
    durationDays,
    status,
    createdBy,
    room
  ) {
    this.reservationNumber = reservationNumber;
    this.startDate = startDate;
    this.durationDays = durationDays;
    this.status = status;
    this.createdBy = createdBy;
    this.room = room;
  }
  // PROBLEM!!!!!!!!!!!!!!!!
  // setCreteBy(Person) {
  //   this.Person = Person;
  // }
  // PROBLEM!!!!!!!!!!!!!!!!
  getDetail(reservationNumber) {
    const roomBooking = new RoomBooking(reservationNumber);
    return roomBooking;
  }
  // PROBLEM!!!!!!!!!!!!!!!! Method ไม่ทำงาน
  createBooking(reservationNumber, startDate, durationDays) {
    const roomBooking = new createBooking(
      reservationNumber,
      startDate,
      durationDays
    );
    return roomBooking;
  }
  toString() {
    console.log(
      "----------------------------------------------------------------"
    );
    return `RoomBooking:\n BookingNumber: ${this.reservationNumber}\n StartDate: ${this.startDate}\n DurationDays: ${this.durationDays}\n Status: ${this.status}\n CreateBy ${this.createdBy}\n ${this.room}]`;
  }
}

/** Class Of Hotel*/
class Hotel {
  name = "";
  location = "";
  rooms = [];
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  // getRooms() {
  //   return this.rooms;
  // }
  addnewRooms(room) {
    this.rooms.push(room);
  }
  toString() {
    let inHotel = "";
    for (let i = 0; i < this.rooms.length; i++) {
      inHotel += "\t" + `${this.rooms[i].toString()}` + "\n";
    }
    return `Hotel : ${this.name} ${this.location} \n ${inHotel} `;
  }
}

/** Class Of Room*/
class Room {
  roomNumber = "";
  style = null;
  status = null;
  roomPrice = 0;
  constructor(roomNumber, style, status, roomPrice) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.status = status;
    this.roomPrice = roomPrice;
  }
  isRoomAvailable(roomNumber) {
    return (
      this.roomNumber === roomNumber && this.status === RoomStatus.AVAILABLE
    );
  }
  createRoom(roomNumber, style, status, price) {
    const newRoom = new Room(roomNumber, style, status, price);
    return newRoom;
  }
  toString() {
    return `Room: [${this.roomNumber}\t${this.style}\t${this.status}\t${this.roomPrice} ]`;
  }
}

/** Enum AccountType*/
//AccountType
class AccountType {
  static GUEST = new AccountType("guest");
  static RECEPTIONIST = new AccountType("receptionist");
  constructor(accountType) {
    this.accountType = accountType;
  }
  toString() {
    return (this.accountType = this.accountType);
  }
}

/** Enum AccountStatus*/
//AccountStatus
class AccountStatus {
  static ACTIVE = new AccountStatus("active");
  static BANNED = new AccountStatus("banned");
  constructor(name) {
    this.name = name;
  }
}

/** Enum RoomStatus*/
//RoomStatus
class RoomStatus {
  static AVAILABLE = new RoomStatus("available");
  static DISAVAILABLE = new RoomStatus("DISAVAILABLE");
  static LATECHECKOUT = new RoomStatus("latecheckout");
  static EARLYCHECKIN = new RoomStatus("earlycheckin");
  constructor(status) {
    this.status = status;
  }
  toString() {
    return (this.status = this.status);
  }
}

/** Enum BookingStatus*/
//BookingStatus
class BookingStatus {
  static CONFIRMED = new BookingStatus("confirmed");
  static CANCEL = new RoomStatus("cancel");
  constructor(status) {
    this.status = status;
  }
  toString() {
    return (this.status = this.status);
  }
}

/** Enum RoomStyle*/
//RoomStyle
class RoomStyle {
  static DOUBLE_POOL = "Double Bed Pool View";
  static DOUBLE_SEA = "Double Bed Sea View";
  static TWIN_POOL = "Twin Bed Pool View";
  static TWIN_SEA = "Twin Bed Sea View";
  constructor(name) {
    this.name = name;
  }
}

/** Main Function */
const main = () => {
  //--> Create GUEST
  const person1 = new Guest(
    "Bob",
    "Bob House",
    "Bob@gg.com",
    "088-8888-888",
    AccountType.GUEST
  );
  const person2 = new Receptionist(
    "Catherine",
    "Catherine Service",
    "Catherine@gg.com",
    "099-9999-999",
    AccountType.RECEPTIONIST
  );

  //--> Create Hotel
  const hotel = new Hotel("SE Hotel", "NPRU");

  //--> Create Rooom
  const room1 = new Room(
    "Room1",
    RoomStyle.DOUBLE_POOL,
    RoomStatus.AVAILABLE,
    1000
  );
  const room2 = new Room(
    "Room2",
    RoomStyle.DOUBLE_SEA,
    RoomStatus.AVAILABLE,
    2000
  );
  const room3 = new Room(
    "Room3",
    RoomStyle.TWIN_POOL,
    RoomStatus.AVAILABLE,
    3000
  );
  const room4 = new Room(
    "Room4",
    RoomStyle.TWIN_SEA,
    RoomStatus.AVAILABLE,
    4000
  );

  //--> Create newBooking
  const newBooking1 = new RoomBooking(
    "01",
    "16/03/2024",
    3,
    BookingStatus.CONFIRMED,
    person1,
    room2
  );

  const newBooking2 = new RoomBooking(
    "02",
    "19/03/2024",
    5,
    BookingStatus.CONFIRMED,
    person2,
    room4
  );

  hotel.addnewRooms(room1);
  hotel.addnewRooms(room2);
  hotel.addnewRooms(room3);
  hotel.addnewRooms(room4);

  console.log(hotel.toString());

  console.log(newBooking1.toString());
  console.log(newBooking2.toString());

  // console.log(newBooking3.toString());
};

main();
