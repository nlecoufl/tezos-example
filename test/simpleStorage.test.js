const SimpleStorage = artifacts.require("SimpleStorage");

contract('SimpleStorage', () => {
  it("...should store the string : nicocamp ", async() => {
    const simpleStorageInstance = await SimpleStorage.deployed()
    await simpleStorageInstance.main('nicocamp');
    const storedInt = await simpleStorageInstance.storage();

    assert.equal(storedInt, 'nicocamp', "The string : nicocamp  was not stored.");
  });
});
