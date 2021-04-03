import copy

def block_member(library_data, email):
    data = copy.deepcopy(library_data)
    data['userManagement']['members'][email]['isBlocked'] = True

    return data


def is_blocked(data, email):
    return data['userManagement']['members'][email]['isBlocked']


if __name__ == '__main__':
    from library_data import data

    email = 'samantha@gmail.com'
    updated = block_member(data, email)

    print(f'before: {is_blocked(data, email)}  after: {is_blocked(updated, email)}')
