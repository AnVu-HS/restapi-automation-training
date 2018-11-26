const { assert } = require('chai');
const { _ } = require('lodash');
const InventoryItemService = require('../../../services/Setup/Item/InventoryItem.service');

const itemService = new InventoryItemService();

describe('EXP_002_Example-2', () => {
  let allItems;
  let response;
  let item1;
  it('Get all global inventory items', async () => {
    response = await itemService.getAllItems();
    allItems = response.body;
    item1 = allItems[0];
    console.log('Item name of item 1 = ', item1.itemName);
  });
  it('Check the response code (1)', () => {
    // ERR: assert.equal(response.status, '409', 'Response code is incorrect');
    assert.equal(response.status, '200', 'Response code is incorrect');
  });
  it('Check the response code (2)', () => {
    console.log('response.status == \'200\': ', response.status == '200');
    assert.equal(response.status, '200', 'Response code is incorrect');
  });
  it('Check the response code (3)', () => {
    // ERR: console.log('response.status === \'200\': ', response.status === '200');
    // ERR: assert.strictEqual(response.status, '200', 'Response code is incorrect');
    console.log('response.status === \'200\': ', response.status === 200);
    assert.strictEqual(response.status, 200, 'Response code is incorrect');
  });
  it('Verify item1 include itemName and data type is string', () => {
    // ERR: assert.isNumber(item1.itemName, 'Name of item1 must be string');
    assert.isString(item1.itemName, 'Name of item1 must be string');
  });
  it('Exercise 3 : Verify itemName of item1 = ABC', () => {
    // Your code here
    assert.strictEqual(item1.itemName, 'ANCHOVY FLAT IN OLV OIL 25-2Z ROLN', 'Item Name is incorrect');
  });
  it('Exercise 4: Find the item has id = inv-item-0000082 in item list, verify item code = 2072 and status = Active', () => {
    // Your code here
    // 1: Return key/value {} and If id is not exist, the code still run CORRECT
    _.forEach(allItems, (itema) => {
      if (itema.id === 'inv-item-0000082') {
        assert.strictEqual(itema.itemCode, '2072', 'Item Code is incorrect');
        assert.strictEqual(itema.status, 'Active', 'Item Status is incorrect');
      }
    });

    // 2: Return object [{}] and If id is not exist, the code still run INCORRECT
    const itemb = _.filter(allItems, { id: 'inv-item-0000082'});
    assert.strictEqual(itemb[0].itemCode, '2072', 'Item Code is incorrect');
    assert.strictEqual(itemb[0].status, 'Active', 'Item Status is incorrect');
  });
});
