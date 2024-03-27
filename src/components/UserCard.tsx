import React, { FC } from 'react'
import { UserProfile } from '../types/userProfile';

type Props = {
  user: UserProfile;
}

const style = {
  border: "solid 1px #ccc",
  borderRadius: "8px",
  margin: "8px",
  padding: "8px 16px"
}

const UserCard: FC<Props> = (props) => {
  const { user } = props;
  return (
    <div style={style}>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>メール</dt>
        <dd>{user.email}</dd>
        <dt>住所</dt>
        <dd>{user.address}</dd>
      </dl>
    </div>
  )
}

export default UserCard
