class StorageRepository {
    static addToLocalStorage(key, value) {
        localStorage.setItem(key, value)
    }

    static getFromLocal(key) {
        return localStorage.getItem(key)
    }
}

export default StorageRepository;