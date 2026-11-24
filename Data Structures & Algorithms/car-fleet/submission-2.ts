class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = position.map((p, i) => [p, speed[i]]).sort((a, b) => a[0] - b[0]);
        let fleets = 0;
        let fleetTime = 0;

        for(let i = cars.length - 1; i >= 0; i--) { 
            const [pos, sp] = cars[i];
            const time = (target - pos) / sp;
            if(fleetTime < time) {
                fleets++;
                fleetTime = time;
            }
        }
        return fleets;
    }
}
