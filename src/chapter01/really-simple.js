class Member {
    isBlocked;

    displayBlockedStatusTwice() {
        var isBlocked = this.isBlocked;
        console.log(isBlocked);
        console.log(isBlocked);
    }
}

member.displayBlockedStatusTwice();
