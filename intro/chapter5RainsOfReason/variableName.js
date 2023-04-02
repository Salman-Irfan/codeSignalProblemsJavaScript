function solution(name) {

    if (1 <= name.length && name.length <= 10) { // checking constraints

        // Check if the name starts with a digit
        if (/^\d/.test(name)) {
            return false;
        }

        // Check if the name contains invalid characters
        else if (!/^[a-zA-Z0-9_]+$/.test(name)) {
            return false;
        }

        // All checks passed, name is valid
        return true;
    }
}
