import React, { useState } from 'react';
import styles from './index.less';
import rules from '../../Rules';
import { Input, Radio } from 'antd';

export default () => {
  const [val, setVal] = useState(1);
  return (
    <div>
      <div>
        <ul className={styles.list}>
          {rules.map(({ title, rule }, index) => {
            return (
              <li key={title} className={styles.row}>
                <h2>{title}</h2>
                <p className={styles.rule}>
                  <span
                    data-clipboard-text="rule"
                    className={styles.btnCopy}
                  >
                    复制
                  </span>
                  {String(rule)}
                </p>
                <section className={styles.verification}>
                  <label>
                    <Input.TextArea />
                    <span className={styles.btnClear}>清空</span>
                  </label>
                  配置：
                  <Radio.Group
                    onChange={e => setVal(e.target.value)}
                    value={val}
                  >
                    <Radio value={1}>对象枚举型</Radio>
                    <Radio value={2}>数组枚举型</Radio>
                    <Radio value={3}>其他自定义方法</Radio>
                  </Radio.Group>
                  {val === 1 && (
                    <div>
                      对象名:
                      <Input />
                      属性1:
                      <Input />
                      属性2:
                      <Input />
                      增加属性名
                    </div>
                  )}
                  <br></br>
                </section>
                结果区域:
                <p className={styles.rule}>结果显示</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
