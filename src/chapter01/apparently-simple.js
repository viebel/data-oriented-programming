class Member {
    isBlocked = false;

    displayBlockedStatusTwice() {
        console.log(this.isBlocked);
        console.log(this.isBlocked);
    }
}

var member = new Member();
member.displayBlockedStatusTwice();
