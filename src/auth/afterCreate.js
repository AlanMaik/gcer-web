export default (
  { screenProps, navigation },
  route = 'ConfirmationCode',
) => async ({ data }) => {
  const { email } = data
  await screenProps.setCurrentUser(data)
  navigation.navigate(route, { email })
}
