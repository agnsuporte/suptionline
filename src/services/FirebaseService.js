import { firebaseDatabase } from '../util/firebaseUtils';

export default class FirebaseService {

    static getUniqueDataBy = async (id, nodePath, callback) => {
        let query = firebaseDatabase.ref(nodePath).child(id);
        await query.once('value').then(dataSnapshot => {
            let item = dataSnapshot.val();
            callback(item);
        });
        return query;
    };

    static updateData = (id, nodePath, objToSubmit) => {
        let ref = firebaseDatabase.ref(nodePath).child(id);
        ref.set(objToSubmit);
        return id;
    }

    static pushData = (node, objToSubmit) => {
        const ref = firebaseDatabase.ref(node).push();
        const id = firebaseDatabase.ref(node).push().key;
        ref.set(objToSubmit);
        return id;
    };

    static getDataList = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath).limitToLast(size);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

    static remove = (id, node) => {
        return firebaseDatabase.ref(node).child(id).remove();
    };

}