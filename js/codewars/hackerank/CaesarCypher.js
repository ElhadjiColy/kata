/*
    Julius Caesar protected his confidential information by encrypting it using a cipher. 
    Caesar's cipher shifts each letter by a number of letters. 
    If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. 
    In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

    Original alphabet:      abcdefghijklmnopqrstuvwxyz
    Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

    Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

    Function Description

    Complete the caesarCipher function in the editor below.

    caesarCipher has the following parameter(s):

    string s: cleartext
    int k: the alphabet rotation factor
    Returns

    string: the encrypted string

    Input Format

    The first line contains the integer, , the length of the unencrypted string.
    The second line contains the unencrypted string, .
    The third line contains , the number of letters to rotate the alphabet by.

    Constraints:
    1 <= n <= 100
    1 <= k <= 100

    s is a valid ASCII string without any spaces.
*/

const caesarCipher = (s, k) => {
    // [65, 91]
    s.lowerCase().map(el => {
        const ascii = ''
    })
}