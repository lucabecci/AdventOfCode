class Solution {
    static solve(data) {
        let gamma = '';
        let epsilon = '';
        let size = data[0].length
        for (let k = 0; k < size; k++) {
            let one = 0;
            let zero = 0;
            for (let z = 0; z < data.length; z++) {
                data[z][k] > 0 ? one++ : zero++;
            }
            if (one > zero) {
                gamma += '1';
                epsilon += '0';
            } else {
                gamma += '0';
                epsilon += '1';
            }
        }
        console.log('GAMMA:', gamma);
        console.log('EPSILON:', epsilon);
        console.log('Power consumption of the submarine:', parseInt(gamma, 2) * parseInt(epsilon, 2));
    }
    //3633500
}

module.exports = Solution;
