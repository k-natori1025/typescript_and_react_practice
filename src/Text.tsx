import React, { FC } from 'react'

type Props = {
  color: string;
  fontSize: string;
}

const Text: FC<Props> = (props) => {

  const { color, fontSize } = props;

  return (
    <div>
      <p style={{ color, fontSize }}>テキストです</p>
    </div>
  )
}

export default Text
