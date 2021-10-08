using System.Collections.Immutable;
using System.Runtime.ExceptionServices;

namespace Challenges
{
    public static class Challenge3
    {
        public static IImmutableDictionary<string, object> BlockMember(ImmutableDictionary<string, object> data, string email)
        {
            if (string.IsNullOrEmpty(email))
            {
                throw new ArgumentException("Provided email is empty");
            }

            try
            {
                data.TryGetValue("userManagement", out dynamic? userManagement);
                Dictionary<string, object> members = userManagement?["members"] ?? throw new InvalidDataException("no members");

                Dictionary<string, object> member = (Dictionary<string, object>)members.FirstOrDefault(b => string.Equals((string)((Dictionary<string, object>)b.Value)["email"], email, StringComparison.OrdinalIgnoreCase)).Value;
                if (member == null)
                {
                    throw new InvalidDataException($"Could not find member with email: {email}");
                }

                member.TryGetValue("isBlocked", out object? memberIsBlocked);
                if (memberIsBlocked == null)
                {
                    throw new InvalidDataException($"Could not find memberIsBlocked info on member: {member}");
                }

                if ((bool)member["isBlocked"])
                {
                    throw new InvalidOperationException($"Could not block member. Member already blocked: {member}");
                }

                member["isBlocked"] = true;
                var d = data.SetItem("userManagement", userManagement);


                return d;
            }
            catch (Exception ex) when (ex is ArgumentNullException || ex is KeyNotFoundException)
            {
                ExceptionDispatchInfo.Capture(ex).Throw();
            }

            return null;
        }
    }
}
