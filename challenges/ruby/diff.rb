require 'pp'
load 'library-data.rb'

def diff(data1, data2)
  return {} if data1 == data2
  return data2 if data1 != data2 && data1.class != Hash
  keys = data1.keys | data2.keys
  keys.reduce({}) do |acc, k|
    result = diff(data1[k], data2[k])
    result = (result.class == Hash && result.empty?) ? {} : {k => result}
    acc.merge(result)
  end
end

updated_library_data = $library_data.deep_copy
updated_library_data['userManagement']['members']['samantha@gmail.com']['isBlocked'] = true

pp diff($library_data, updated_library_data)
pp diff($library_data, $library_data)
