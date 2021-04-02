load 'library-data.rb'

def block_member(library_data, email)
  information_path = ['userManagement', 'members', email, 'isBlocked']
  library_data.set_in(information_path, true)
end

updated_library_data = block_member($library_data, 'samantha@gmail.com')
information_path = ['userManagement', 'members', 'samantha@gmail.com', 'isBlocked']
pp [updated_library_data.dig(*information_path), $library_data.dig(*information_path)]
