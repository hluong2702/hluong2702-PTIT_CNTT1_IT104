const USD_TO_VND = 25000;

class Passenger {
    private static nextId: number = 1;
    passengerId: number;
    name: string;
    passportNumber: string;

    constructor(name: string, passportNumber: string) {
        this.passengerId = Passenger.nextId++;
        this.name = name;
        this.passportNumber = passportNumber;
    }

    getDetails(): string {
        return `ID: ${this.passengerId}, Name: ${this.name}, Passport: ${this.passportNumber}`;
    }
}

abstract class Flight {
    flightNumber: string;
    origin: string;
    destination: string;
    departureTime: Date;
    capacity: number;
    bookedSeats: number = 0;
    ticketPrice: number;

    constructor(flightNumber: string, origin: string, destination: string, departureTime: Date, capacity: number, ticketPrice: number) {
        this.flightNumber = flightNumber;
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.capacity = capacity;
        this.ticketPrice = ticketPrice;
    }

    bookSeat(): void {
        this.bookedSeats++;
    }

    isFull(): boolean {
        return this.bookedSeats >= this.capacity;
    }

    abstract calculateBaggageFee(weight: number): number;
    abstract getType(): string;
    abstract getFlightInfo(): string;
}

class DomesticFlight extends Flight {
    calculateBaggageFee(weight: number): number {
        return 50000 * weight;
    }

    getType(): string {
        return "Domestic";
    }

    getFlightInfo(): string {
        return `Flight ${this.flightNumber}: ${this.origin} to ${this.destination}, Departure: ${this.departureTime.toISOString()}, Capacity: ${this.capacity}, Booked: ${this.bookedSeats}, Type: ${this.getType()}, Ticket Price: ${this.ticketPrice} VND`;
    }
}

class InternationalFlight extends Flight {
    calculateBaggageFee(weight: number): number {
        return 10 * weight * USD_TO_VND;
    }

    getType(): string {
        return "International";
    }

    getFlightInfo(): string {
        return `Flight ${this.flightNumber}: ${this.origin} to ${this.destination}, Departure: ${this.departureTime.toISOString()}, Capacity: ${this.capacity}, Booked: ${this.bookedSeats}, Type: ${this.getType()}, Ticket Price: ${this.ticketPrice} VND`;
    }
}

class Booking {
    private static nextId: number = 1;
    bookingId: number;
    passenger: Passenger;
    flight: Flight;
    numberOfTickets: number;
    totalCost: number;

    constructor(passenger: Passenger, flight: Flight, numberOfTickets: number, baggageWeight: number) {
        this.bookingId = Booking.nextId++;
        this.passenger = passenger;
        this.flight = flight;
        this.numberOfTickets = numberOfTickets;
        this.totalCost = numberOfTickets * flight.ticketPrice + flight.calculateBaggageFee(baggageWeight);
    }

    getBookingDetails(): string {
        return `Booking ID: ${this.bookingId}, Passenger: ${this.passenger.name}, Flight: ${this.flight.flightNumber}, Tickets: ${this.numberOfTickets}, Total Cost: ${this.totalCost} VND`;
    }
}

class GenericRepository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }

    find(predicate: (item: T) => boolean): T | undefined {
        return this.items.find(predicate);
    }

    findIndex(predicate: (item: T) => boolean): number {
        return this.items.findIndex(predicate);
    }

    remove(predicate: (item: T) => boolean): void {
        this.items = this.items.filter(item => !predicate(item));
    }
}

class AirlineManager {
    private flightRepo: GenericRepository<Flight> = new GenericRepository<Flight>();
    private passengerRepo: GenericRepository<Passenger> = new GenericRepository<Passenger>();
    private bookingRepo: GenericRepository<Booking> = new GenericRepository<Booking>();

    addFlight(flight: Flight): void {
        this.flightRepo.add(flight);
    }

    addPassenger(name: string, passportNumber: string): void {
        const passenger = new Passenger(name, passportNumber);
        this.passengerRepo.add(passenger);
    }

    createBooking(passengerId: number, flightNumber: string, numberOfTickets: number, baggageWeight: number): Booking | null {
        const passenger = this.passengerRepo.find(p => p.passengerId === passengerId);
        if (!passenger) {
            console.log("Passenger not found.");
            return null;
        }

        const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
        if (!flight) {
            console.log("Flight not found.");
            return null;
        }

        if (flight.bookedSeats + numberOfTickets > flight.capacity) {
            console.log("Not enough seats available.");
            return null;
        }

        for (let i = 0; i < numberOfTickets; i++) {
            flight.bookSeat();
        }

        const booking = new Booking(passenger, flight, numberOfTickets, baggageWeight);
        this.bookingRepo.add(booking);
        return booking;
    }

    cancelBooking(bookingId: number): void {
        const booking = this.bookingRepo.find(b => b.bookingId === bookingId);
        if (booking) {
            booking.flight.bookedSeats -= booking.numberOfTickets;
            this.bookingRepo.remove(b => b.bookingId === bookingId);
            console.log(`Booking ${bookingId} canceled.`);
        } else {
            console.log("Booking not found.");
        }
    }

    listAvailableFlights(origin: string, destination: string): void {
        const availableFlights = this.flightRepo.getAll().filter(f => f.origin === origin && f.destination === destination && !f.isFull());
        availableFlights.forEach(f => console.log(f.getFlightInfo()));
    }

    listBookingsByPassenger(passengerId: number): void {
        const bookings = this.bookingRepo.getAll().filter(b => b.passenger.passengerId === passengerId);
        bookings.forEach(b => console.log(b.getBookingDetails()));
    }

    calculateTotalRevenue(): number {
        return this.bookingRepo.getAll().reduce((total, booking) => total + booking.totalCost, 0);
    }

    countFlightsByType(): void {
        const typeCount = this.flightRepo.getAll().reduce((acc: { [key: string]: number }, f) => {
            const type = f.getType();
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {});
        for (const [type, count] of Object.entries(typeCount)) {
            console.log(`${type}: ${count}`);
        }
    }

    updateFlightTime(flightNumber: string, newDepartureTime: Date): void {
        const flight = this.flightRepo.find(f => f.flightNumber === flightNumber);
        if (flight) {
            flight.departureTime = newDepartureTime;
            console.log(`Flight ${flightNumber} departure time updated.`);
        } else {
            console.log("Flight not found.");
        }
    }

    getFlightPassengerList(flightNumber: string): void {
        const bookings = this.bookingRepo.getAll().filter(b => b.flight.flightNumber === flightNumber);
        if (bookings.length === 0) {
            console.log("No passengers for this flight.");
            return;
        }
        const passengerList = bookings.map(b => `${b.passenger.getDetails()} (Tickets: ${b.numberOfTickets})`);
        console.log("Passengers:");
        console.log(passengerList.join('\n'));
    }
}

import * as readline from 'readline';

const manager = new AirlineManager();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(question: string): Promise<string> {
    return new Promise(resolve => rl.question(question, resolve));
}

async function mainMenu() {
    while (true) {
        console.log("\nMenu:");
        console.log("1. Thêm hành khách mới");
        console.log("2. Thêm chuyến bay mới");
        console.log("3. Tạo giao dịch đặt vé");
        console.log("4. Hủy giao dịch đặt vé");
        console.log("5. Hiển thị danh sách chuyến bay còn trống theo điểm đi và đến");
        console.log("6. Hiển thị danh sách vé đã đặt của một hành khách");
        console.log("7. Tính tổng doanh thu của hãng");
        console.log("8. Đếm số lượng chuyến bay nội địa/quốc tế");
        console.log("9. Cập nhật giờ bay");
        console.log("10. Xem danh sách hành khách của một chuyến bay");
        console.log("11. Thoát");

        const choice = await prompt("Chọn chức năng: ");

        switch (choice) {
            case '1':
                const name = await prompt("Tên hành khách: ");
                const passport = await prompt("Số hộ chiếu: ");
                manager.addPassenger(name, passport);
                console.log("Hành khách đã thêm.");
                break;
            case '2':
                const type = await prompt("Loại chuyến bay (1: Nội địa, 2: Quốc tế): ");
                const flightNumber = await prompt("Số hiệu chuyến bay: ");
                const origin = await prompt("Nơi đi: ");
                const destination = await prompt("Nơi đến: ");
                const departureStr = await prompt("Thời gian khởi hành (YYYY-MM-DDTHH:mm:ss): ");
                const departureTime = new Date(departureStr);
                const capacity = parseInt(await prompt("Sức chứa: "));
                const ticketPrice = parseFloat(await prompt("Giá vé (VND): "));
                let flight: Flight;
                if (type === '1') {
                    flight = new DomesticFlight(flightNumber, origin, destination, departureTime, capacity, ticketPrice);
                } else if (type === '2') {
                    flight = new InternationalFlight(flightNumber, origin, destination, departureTime, capacity, ticketPrice);
                } else {
                    console.log("Loại không hợp lệ.");
                    continue;
                }
                manager.addFlight(flight);
                console.log("Chuyến bay đã thêm.");
                break;
            case '3':
                const passengerId = parseInt(await prompt("ID hành khách: "));
                const flightNum = await prompt("Số hiệu chuyến bay: ");
                const numTickets = parseInt(await prompt("Số lượng vé: "));
                const baggageWeight = parseFloat(await prompt("Cân nặng hành lý (kg): "));
                const booking = manager.createBooking(passengerId, flightNum, numTickets, baggageWeight);
                if (booking) {
                    console.log("Đặt vé thành công:");
                    console.log(booking.getBookingDetails());
                }
                break;
            case '4':
                const bookingId = parseInt(await prompt("ID đặt vé: "));
                manager.cancelBooking(bookingId);
                break;
            case '5':
                const orig = await prompt("Nơi đi: ");
                const dest = await prompt("Nơi đến: ");
                manager.listAvailableFlights(orig, dest);
                break;
            case '6':
                const passId = parseInt(await prompt("ID hành khách: "));
                manager.listBookingsByPassenger(passId);
                break;
            case '7':
                console.log("Tổng doanh thu:", manager.calculateTotalRevenue(), "VND");
                break;
            case '8':
                manager.countFlightsByType();
                break;
            case '9':
                const flNum = await prompt("Số hiệu chuyến bay: ");
                const newDepStr = await prompt("Thời gian khởi hành mới (YYYY-MM-DDTHH:mm:ss): ");
                const newDepTime = new Date(newDepStr);
                manager.updateFlightTime(flNum, newDepTime);
                break;
            case '10':
                const flNumber = await prompt("Số hiệu chuyến bay: ");
                manager.getFlightPassengerList(flNumber);
                break;
            case '11':
                rl.close();
                return;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    }
}

mainMenu();