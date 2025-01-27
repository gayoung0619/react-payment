import React, { useEffect, useState, useRef } from 'react';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { nanoid } from "nanoid";
import styles from './cart.module.scss';

function Cart() {
  const clientKey = import.meta.env.VITE_CLIENT_KEY;
  const prdPrice = 250;
  const deliveryFee = 50;
  const totalAmount = prdPrice + deliveryFee;

  const payment = () => {
    loadTossPayments(clientKey).then(tossPayments => {
      tossPayments.requestPayment('카드', {
        amount: totalAmount,
        orderId: nanoid(),
        orderName: "상품이름",
        customerName: "양가영",
        successUrl: `${import.meta.env.VITE_BASE_URL}/success`,
        failUrl: `${import.meta.env.VITE_BASE_URL}/fail`
      })
          .catch(function (error) {
            if (error.code === 'USER_CANCEL') {
              // 결제 고객이 결제창을 닫았을 때 에러 처리
            } else if (error.code === 'INVALID_CARD_COMPANY') {
              // 유효하지 않은 카드 코드에 대한 에러 처리
            }
          })
    })
  }

  return (
      <section>
        <div className={styles.totalBox}>
          <p className={styles.amount}>
            총 주문금액<span>{prdPrice}원</span>
            <em>+</em>
          </p>
          <p className={styles.amount}>
            배송비 <span>{deliveryFee}원</span>
            <em>=</em>
          </p>
          <p className={styles.totalPrice}>총 결제금액 {totalAmount}원</p>
        </div>
        <div id="payment-widget"/>
        <div className={styles.purchase}  onClick={payment}>구매하기</div>
      </section>
  );
}

export default Cart;