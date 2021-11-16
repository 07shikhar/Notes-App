const event = {
    name: 'Birthday Party',
    guestList: ['Shikhar', 'Mayank', 'Mridul'],
    printGuestList() {
        console.log('List for ' + this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending' + this.name)

        })
    }
}
event.printGuestList()