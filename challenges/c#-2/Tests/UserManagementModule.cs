namespace Tests;

static class UserManagementModule
{
    public static MemberData BlockMember(this UserManagementData m, string email) =>
        FindMember(m, email) with
        {
            IsBlocked = true
        };

    public static UserManagementData UpdateMember(
        this UserManagementData m,
        string                  email,
        MemberData              d) => m with
    {
        Members = m.Members.With(email, d)
    };

    public static MemberData FindMember(this UserManagementData m, string email) =>
        m.Members[email];
}