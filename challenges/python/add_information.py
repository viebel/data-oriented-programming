def block_member(library_data, email):
    return __set_in(
            library_data,
            ['userManagement', 'members', email, 'isBlocked'],
            True)


def __set_in(m, ks, v):
    updated_m = m.copy()
    updated_m[ks[0]] = v if len(ks) == 1 else __set_in(m[ks[0]], ks[1:], v)
    return updated_m


def is_blocked(data, email):
    return data['userManagement']['members'][email]['isBlocked']


if __name__ == '__main__':
    from library_data import data

    email = 'samantha@gmail.com'
    updated = block_member(data, email)

    print(f'before: {is_blocked(data, email)}  after: {is_blocked(updated, email)}')
