export function usersFormattedForDropdown(users) {
  return users.map(user => {
    return {
      value: user.id,
      text: user.firstName + ' ' + user.lastName
    };
  });
}