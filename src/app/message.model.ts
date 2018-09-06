export interface Message {
    user: string;
    msg: string;
    timestamp: firebase.firestore.FieldValue;
}
