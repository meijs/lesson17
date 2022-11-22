function User({ user }) {
  return (
    <li>
      # {user.id} {user.name} {user.email}
    </li>
  );
}

export default User;
