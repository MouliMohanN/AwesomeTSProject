import React from 'react';
import {requireNativeComponent} from 'react-native';

interface NumberRollerTextViewProps {
  prefix: string;
  postfix: string;
  initialValue: number;
  finalValue: number;
}

const RNNumberRollerTextView = requireNativeComponent('RNNumberRollerTextView');

/* export const NumberRollerTextView = (props: NumberRollerTextViewProps) => {
  return <RNNumberRollerTextView {...props} />;
};
 */

class NumberRollerTextView extends React.Component<NumberRollerTextViewProps> {
  render() {
    return <RNNumberRollerTextView {...this.props} />;
  }
}

export default NumberRollerTextView;
