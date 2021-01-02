class Member {
    isBlocked = false;

    displayBlockedStatusTwice() {
        var isBlocked = this.isBlocked;
        console.log(isBlocked);
        console.log(isBlocked);
    }
}

var member = new Member();
member.displayBlockedStatusTwice();
