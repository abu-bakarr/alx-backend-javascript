export default function getNeighborhoodsList(newNeighborhood) {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

    const self = this;
    this.getNeighborhood = add(newNeighborhood)
}
const add = (data) => {
    self.sanFranciscoNeighborhoods.push(data);
    return self.sanFranciscoNeighborhoods;
}