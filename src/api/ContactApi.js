import { Alert, Platform } from 'react-native';
import * as Contacts from 'expo-contacts';
import { CONTACTS_DATA } from '../constants/Mocks';
import * as Permissions from 'expo-permissions';

export const addContactsWithGroup = async (contactIds, setContactIds) => {
  await Contacts.requestPermissionsAsync();
  const { status } = await Contacts.getPermissionsAsync();
  Alert.alert(status);
  if(status === 'granted') {
    let newGroupId = '';
    let defaultContainerId = '';
    
    if(Platform.OS == 'ios') {
      defaultContainerId = await Contacts.getDefaultContainerIdAsync();
      newGroupId = await Contacts.createGroupAsync('ContactsFeature', defaultContainerId);
    }

    CONTACTS_DATA.forEach(async (contact) => {
      if(Platform.OS == 'ios') {
        const contactId = await Contacts.addContactAsync(contact, defaultContainerId);
        await Contacts.addExistingContactToGroupAsync(contactId, newGroupId);
      } else {
        const contactId = await Contacts.addContactAsync(contact);
        setContactIds([...contactIds, contactId]);
      }
    });
    Alert.alert('Info', `You have been added ${CONTACTS_DATA.length} contacts to new \'ContactsFeature\' group.`);
  } else {
    Alert.alert('Warning', 'You rejected permissions apply.');
  }
}

export const removeContactsWithGroup = async () => {
  const groupsToRemove =  await Contacts.getGroupsAsync({ groupName: 'ContactsFeature' });
  groupsToRemove.forEach(async (group) => {
    const  { id } = group;
    const { data } = await Contacts.getContactsAsync({ groupId: id });

    if(data.length > 0) {
      data.forEach(async (contact) => {
        const { id } = contact;
        await Contacts.removeContactAsync(id);
      });
    }
  });
  groupsToRemove.forEach(async (group) => await Contacts.removeGroupAsync(group.id));
  if(groupsToRemove.length > 0) {
    Alert.alert('Info', 'Previously added contacts has been removed.');
  } else {
    Alert.alert('Info', 'No contacts found.');
  }
}

export const removeContactsAndroid = async (contactIds) => {
  if(contactIds.length > 0) {
    contactIds.forEach(async (contactId) => await Contacts.removeContactAsync(contactId));
    Alert.alert('Info', 'Previously added contacts has been removed.');
  } else {
    Alert.alert('Info', 'No contacts found.');
  }
}