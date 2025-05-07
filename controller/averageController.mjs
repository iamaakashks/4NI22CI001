import { fetchNumbers, getStoredNumbers, storeNumbers } from '../service/numberService.mjs';
import _ from 'lodash';

const validIds = { p: 'prime', f: 'fibonacci', e: 'even', r: 'random' };

export default async function averageController(req, res, next) {
  try {
    const { numberid } = req.params;

    if (!validIds[numberid]) {
      return res.status(400).json({ error: 'Invalid number ID' });
    }

    const numbers = await fetchNumbers(numberid);
    const windowSize = parseInt(process.env.WINDOW_SIZE) || 10;
    const prevState = getStoredNumbers();

    const updated = _.uniq([...prevState, ...numbers]);
    while (updated.length > windowSize) {
      updated.shift();
    }

    storeNumbers(updated);

    const avg = updated.length ? (_.mean(updated)).toFixed(2) : 0;

    res.json({
      windowPrevState: prevState,
      windowCurrState: updated,
      numbers,
      avg
    });

  } catch (err) {
    next(err);
  }
}