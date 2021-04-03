//
// some lodash collection methods ported to go
//
package main

type any = interface{}
type d = map[string]any
type l = []any

type filterer func(v any) any
type reducer func(prev, v, sel any) any

type p []string

func _get(data, sel any) (ret any) {
	if ldata, ok := data.(l); ok {
		i := sel.(int)
		return ldata[i]
	}

	ddata := data.(d)

	if k, ok := sel.(string); ok {
		return ddata[k]
	}

	path := sel.(p)
	ret = ddata

	for _, k := range path {
		ret = ddata[k]
		if dd, ok := ret.(d); ok {
			ddata = dd
		} else {
			ddata = nil
		}
	}

	return
}

func _set(data, sel, v any) any {
	if ldata, ok := data.(l); ok {
		i := sel.(int)

		var ret l

		if i < len(ldata) { // replace existing element
			ret = make(l, len(ldata))
		} else { // make space for new element
			ret = make(l, i+1)
		}

		copy(ret, ldata)
		ret[i] = v
		return ret
	}

	if k, ok := sel.(string); ok {
		mdata := _clone(data).(d)
		mdata[k] = v
		return mdata
	}

	path := sel.(p)

	k := path[0]
	if len(path) > 1 {
		v = _set(data.(d)[k], path[1:], v)
	}

	return _set(data, k, v)
}

func _omit(data, sel any) any {
	data = _cloneDeep(data)

	if ldata, ok := data.(l); ok {
		i := sel.(int)
		if i >= len(ldata) {
			return l{}
		}

		return append(ldata[i:], ldata[i+1:]...)
	}

	mdata := data.(d)

	if k, ok := sel.(string); ok {
		delete(mdata, k)
		return mdata
	}

	path := sel.(p)
	lpath := len(path)
	cur := mdata

	for i, k := range path {
		if dd, ok := cur[k].(d); ok {
			cur = dd
		} else if i == lpath-1 {
			delete(cur, k)
		} else {
			panic("invalid value for " + k)
		}
	}

	return mdata
}

func _merge(m1, m2 d) d {
	return mmerge(_cloneDeep(m1).(d), m2)
}

func mmerge(m1, m2 d) d {
	for k, v := range m2 {
		mm1, ok1 := m1[k].(d)
		mm2, ok2 := v.(d)
		if !ok1 || !ok2 {
			m1[k] = v
			continue
		}

		m1[k] = mmerge(mm1, mm2)
	}

	return m1
}

func _keys(o any) (ret l) {
	if m, ok := o.(d); ok {
		ret = make(l, 0, len(m))
		for k, _ := range m {
			ret = append(ret, k)
		}

	} else if s, ok := o.(l); ok {
		ret = make(l, 0, len(s))
		for i, _ := range s {
			ret = append(ret, i)
		}
	}

	return
}

func _union(l1, l2 l) l {
	set := map[interface{}]struct{}{}
	for _, v := range l1 {
		set[v] = struct{}{}
	}
	for _, v := range l2 {
		set[v] = struct{}{}
	}

	ret := make(l, 0, len(set))
	for k, _ := range set {
		ret = append(ret, k)
	}

	return ret
}

func _map(in any, f filterer) (out l) {
	if inl, ok := in.(l); ok {
		for _, v := range inl {
			out = append(out, f(v))
		}
	} else if ind, ok := in.(d); ok {
		for _, v := range ind {
			out = append(out, f(v))
		}
	}

	return
}

func _filter(in any, f filterer) (out l) {
	if inl, ok := in.(l); ok {
		for _, v := range inl {
			if f(v).(bool) {
				out = append(out, v)
			}
		}
	} else if ind, ok := in.(d); ok {
		for _, v := range ind {
			if f(v).(bool) {
				out = append(out, v)
			}
		}
	}

	return
}

func _reduce(in any, f reducer, acc any) any {
	if inl, ok := in.(l); ok {
		for i, v := range inl {
			acc = f(acc, v, i)
		}
	} else if ind, ok := in.(d); ok {
		for k, v := range ind {
			acc = f(acc, v, k)
		}
	}

	return acc
}

func _clone(v any) any {
	if d, ok := v.(d); ok {
		return clonemap(d, false)
	}

	if l, ok := v.(l); ok {
		return cloneslice(l, false)
	}

	return v
}

func _cloneDeep(v any) any {
	if d, ok := v.(d); ok {
		return clonemap(d, true)
	}

	if l, ok := v.(l); ok {
		return cloneslice(l, true)
	}

	return v
}

func clonemap(m d, deep bool) d {
	ret := d{}

	for k, v := range m {
		if deep {
			v = _cloneDeep(v)
		}

		ret[k] = v
	}

	return ret
}

func cloneslice(s l, deep bool) l {
	ret := make(l, 0, len(s))

	for _, v := range s {
		if deep {
			v = _cloneDeep(v)
		}

		ret = append(ret, v)
	}

	return ret
}
