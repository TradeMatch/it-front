package org.itrade.semantic;

import org.itrade.commons.jms.ITradeJmsMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class MessageListener {
    Logger logger = LoggerFactory.getLogger(getClass());

    public void onMessage(ITradeJmsMessage message) {
        logger.debug("Message received: " + message);
        String category = message.getCategory();
    }
}
