import produce from 'immer';
import {Library} from './data-model';
import {libraryData} from './test-data';

function blockMember(library: Library, email: string) {
  return produce(library, (libraryDraft) => {
    libraryDraft.userManagement.membersByEmail[email].isBlocked = true;
  });
}

describe('Challenge 3 - Add a piece of information', () => {
  test('blockMember should not modify the original library', () => {
    const updatedLibraryData = blockMember(libraryData, 'samantha@gmail.com');

    expect(updatedLibraryData.userManagement.membersByEmail['samantha@gmail.com'].isBlocked).toEqual(true);
    expect(libraryData.userManagement.membersByEmail['samantha@gmail.com'].isBlocked).toEqual(false);
  });
});