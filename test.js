import test from 'ava';
import m from './';

test('string', t => {
	t.is(m('foo bar baz'), 3);
});

test('string with whitespaces', t => {
	t.is(m('  foo bar     baz '), 3);
});

test('string with non-english characters', t => {
	t.is(m('είμαι Έλληνας!'), 2);
});