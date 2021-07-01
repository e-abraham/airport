User Stories

As a passenger, I want to take bags on my flight by selecting bags and checking them in.

As a crewmember, I want to go through security by showing my credentials.

As a passenger, I want to book a flight by selecting a flight and making a payment.

As a crewmember, I want to raise my security level by passing background checks.

Class Diagram

Passenger {
    name: String
    flightNumber: Integer
    bags: Array
    boardingPass: Object


    bookFlight()
    weighBag()
    checkInBag()
    makePayment()

}

Airport {
    name: String
    id: Integer
    location: String
    planes: Array

    acceptBoardingPass()
}