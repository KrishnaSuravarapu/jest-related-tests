const { log } = require('../src/utils');

describe('log function', () => {
    it('should log the message with a timestamp', () => {
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        const testMessage = 'Test message';

        log(testMessage);

        expect(consoleSpy).toHaveBeenCalledTimes(1);
        const loggedMessage = consoleSpy.mock.calls[0][0];
        expect(loggedMessage).toMatch(/\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\] Test message/);

        consoleSpy.mockRestore();
    });
});