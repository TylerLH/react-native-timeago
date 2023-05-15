import * as React from 'react';
import {TextStyle} from 'react-native'

export interface Props {
    time: string | number | Array<any> | Date;
    interval?: number;
    hideAgo?: boolean;
    textStyle?: TextStyle,
}

declare module 'react-native-timeago' {
    export default class TimeAgo extends React.Component<Props> {}
}
