/* @flow */
import React from 'react';

type Props = {

};

/**
 * The home page of the website.
 */
export default function Internal({ ...otherProps }: Props): React.Element<*> {
  return (
    <div {...otherProps}>
      Internal Page
    </div>
  );
}
