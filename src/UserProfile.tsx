import React, { FC } from 'react'
import { User } from './types/user';

type Props = {
  user: User;
}

const UserProfile: FC<Props> = (props) => {

  const { user } = props;

  return (
    <div>
      <dl>
        <dt>名前</dt>
        <dd>{user.name}</dd>
        <dt>趣味</dt>
        <dd>{user.hobbies?.join("/")}</dd>
      </dl>
    </div>
  )
}

export default UserProfile;
