def is_not_container(v):
    return not(isinstance(v, dict) or isinstance(v, list))


def diff_objects(data1, data2):
    if data1 == data2:
        return None
    if is_not_container(data2):
        return data2
    elif len(data1) == 0:
        return data2
    else:
        keys = set(set(data1.keys()) | set(data2.keys()))
        result = {}

        for k in keys:
            diff = diff_objects(data1[k], data2[k])

            if diff is not None:
                result[k] = diff

        if len(result) == 0:
            return None
        else:
            return result


if __name__ == '__main__':
    from library_data import data
    from add_information import block_member

    print(diff_objects(data, data))

    updated = block_member(data, 'samantha@gmail.com')

    print(diff_objects(data, updated))

